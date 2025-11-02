import MarkdownPreview from '@uiw/react-markdown-preview';

/**
 * Renders the chat history messages.
 * * @param {Object} props - The component props.
 * @param {Array<Object>} props.chatHistory - An array of message objects.
 * Each message object is expected to have:
 * - sender (string): "user" or "ai"
 * - content (string): The message text
 * - date (number): A timestamp for the message
 */
function RenderChatHistory({ chatHistory }) {
  // Check if chatHistory is valid and an array
  if (!Array.isArray(chatHistory) || chatHistory.length === 0) {
    return <section style={{color:"gray",fontStyle:"italic",fontSize:25,padding:"2%"}}>Welcome! Start a conversation...
</section>;
  }

  return (
    <section style={{padding:"5%"}}>
      {chatHistory.map((message, index) => { // ⬅️ The arguments are (element, index)
        // Ensure that each mapped element has a unique 'key' for React
        const key = index; 

        // 1. AI Message: Render using MarkdownPreview
        if (message.role === "assistant") {
          return ( // ⬅️ Must explicitly return the JSX element
            <div key={key} className="ai-message-container">
              {/* Assuming 'message.content' is where the markdown string lives */}
              <MarkdownPreview 
                source={message.content} 
                style={{ padding: '16px',color:"black",backgroundColor:"white", borderRadius: '8px' }} // Added some basic styling
              />
              {/* Optional: display date for debugging or context */}
              {/* <small className="message-date">{new Date(message.date).toLocaleTimeString()}</small> */}
            </div>
          );
        } 
        
        // 2. User Message: Render as a simple div/p block
        else if (message.role === "user") {
          return ( // ⬅️ Must explicitly return the JSX element
            <div key={key} className="user-message-container" style={{ textAlign: 'right', margin: '10px 0' }}>
              <p className="user-message-content" style={{ padding: '10px', background: '#007bff', color: 'white', borderRadius: '8px', display: 'inline-block' }}>
                {message.content}
              </p>
              {/* Optional: display date */}
              {/* <small className="message-date">{new Date(message.date).toLocaleTimeString()}</small> */}
            </div>
          );
        }
        
        // Handle unexpected sender types (optional)
        return null;
      })}
    </section>
  );
}

export default RenderChatHistory;