import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({width, text}) => {
  return (
    <div className='progressBar'>
        <div className='progressHolder' style={{width:`${width}%`}}>
            {text}
        </div>
    </div>
  )
}

export default ProgressBar



// function App() {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {

//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if(prev >= 100){
//           clearInterval(interval)
//           return 100;
//         }
//         return prev + 1 
//       })
//     }, 100)

//     return () => {
//       clearInterval(interval)
//     }
//   }, [])
  

//   return (
//     <div className="App">
//       Progress Bar
//       <ProgressBar text = {progress} width={progress} />
//     </div>
//   );
// }