const myComponent = ({extraInfo, user}) =>{
    return (
        <div>
        <div>extraInfo : {extraInfo}</div>
        <div>user : {user}</div>
        </div>
    )
}

const WithExtraInfo = (Wrapper) =>{
    return (props) =>{ 
        const info = 'info extra';
        return <Wrapper {...props} extraInfo ={info}/>
    }
}

const EnhanceMentComp = WithExtraInfo(myComponent);

export const HigherOrderComponent = () =>{
    return <EnhanceMentComp user = 'user'/>
}