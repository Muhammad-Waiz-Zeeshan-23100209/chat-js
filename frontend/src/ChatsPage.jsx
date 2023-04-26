import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        "ea61132c-2dc7-438a-aa9b-3b8879b3ac0b"
        ,props.user.username, 
        props.user.secret
    )
    return <div style= {{height:"100vh"}}>
           <MultiChatSocket {...chatProps}/>
           <MultiChatWindow {...chatProps} style= {{height: "100%"}} />
    </div>;
  };
  export default ChatsPage;