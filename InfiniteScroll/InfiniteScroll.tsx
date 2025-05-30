import { useEffect, useState } from "react"

export const InfiniteScroll = ()  =>{

  const [count , setCount] = useState(50);

  const element = [];
  
  useEffect(()=>{
   const onScroll = () => {
    if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight ){
        setCount(count+10);
    }
   }
   window.addEventListener('scroll', onScroll)
   return () => window.removeEventListener('scroll', onScroll)
  }, [count])
  
    for(let i = 0; i <= count; i++){
        element.push(<div style={{flexDirection:"row"}}>{i}</div>);
    }
  
  return (
    <div>
        {element}
    </div>
  )
}
