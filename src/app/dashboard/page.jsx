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
    <div className="grid grid-cols-2 ">
     <div className="p-20 ml-2 w-[100%] ">
       <div className="">
        {
        isLoading ? "loading" : data?.map ((post)=>(
        <div key={post._id} className="flex justify-center gap-10 text-center">
          
          <Image className='justify-center h-40 mb-10 w-60 '
           src={post.img} alt="" width={200} height={100} />
        <h2 className='justify-center text-xl text-center mt-14 '>{post.title}</h2>
        
        <span className='justify-center text-2xl font-extrabold text-center text-red-700 cursor-pointer mt-14 '
         onClick={()=>handleDelete(post._id)}>X</span>
      </div>
      ))}
       </div>
     </div>
     <div className="mt-10">
        <h2 className='mb-5 text-2xl font-bold'>Add New Posts</h2>
       <form className='grid mt-5'
        onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' 
        className='w-[70%] border border-gray-600 mb-5 h-12 bg-transparent px-3 placeholder:text-md'/>
        <input type="text" placeholder='Desc' 
        className='w-[70%] border border-gray-600 mb-5 h-12 bg-transparent px-3 placeholder:text-md'/>
        <input type="text" placeholder='Image' 
        className='w-[70%] border border-gray-600 mb-5 h-12 bg-transparent px-3 placeholder:text-md'/>
        <textarea name="" id="" placeholder='Content'
        className='w-[70%] border border-gray-600 mb-5 h-48 bg-transparent px-3 placeholder:text-md py-2'>
        </textarea> 
        <button className='w-[70%] text-white bg-green-700  h-12 rounded-md'>Send</button>
      </form>
     </div>
    </div>
  )
  }
}

export default Dashboard