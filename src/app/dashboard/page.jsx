"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'
import Image from 'next/image'  

const Dashboard = () => {
 
 
  // const [data,setData]= useState([]);
  // const [error, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=>{
  //   const getData = async ()=>{
  //     setIsLoading(true)

  //      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
  //         cache: 'no-store'}  // fetch fresh data on every fetch request
  //     );
        
  //       if(!res.ok){
  //       setIsError(true)
  //       }

  //       const data = await res.json();
        
  //      setData(data);
  //      setIsLoading(false);
  //   }
  //   getData();
  // },[])


     const session = useSession();

     const router= useRouter();

      const fetcher = (...args) => fetch(...args).then(res => res.json())

      const { data, mutate,  error, isLoading } = 
      useSWR(`/api/posts?username=${session?.data?.user.name} `, 
        fetcher);

        console.log(data);
        


     if(session.status === "loading"){
      return <p>Loading..</p>
     }

     if(session.status === "unauthenticated"){
      router?.push('/dashboard/login');
     }
      
      const handleSubmit = async(e) =>{
    e.preventDefault();
    
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: "POST",
      
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name
        }),
      });
     
      mutate(); 
      e.target.reset(); // Reset the form after submission 
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  }


  const handleDelete = async(id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();  // Revalidate the data after deletion
      } catch (err) {
      console.log(err);
      
    }
  }


  if(session.status === "authenticated"){

  return(
    <div className="">
      <div className="">

        {isLoading ? "loading" : data?.map ((post)=>(
        <div key={post._id} className="">
          <Image src={post.img} alt="" width={200} height={100} />
        <h2>{post.title}</h2>
        <span onClick={()=>handleDelete(post._id)}>X</span>
      </div>

      ))}
       </div>
      <form onSubmit={handleSubmit}>
        <h2>Add New Posts</h2>
        <input type="text" placeholder='Title' 
        className=''/>
        <input type="text" placeholder='Desc' 
        className=''/>
        <input type="text" placeholder='Image' 
        className=''/>
        <textarea name="" id=""
        placeholder='Content'>
        </textarea> 
        <button>Send</button>
      </form>
    </div>
  )
  }
}

export default Dashboard