import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    


    let conversation =await Conversation.findOne({
        participants:{$all:[senderId,receiverId]},
    })

    if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId,receiverId]
        })
    }

    const newMessage = new Message ({
        senderId,
        receiverId,
        message,
    })
    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);
    const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

    res.status(201).json({newMessage})
  } catch (error) {
    console.log("error in sendmessage controller", error);
    res.status(500).json({ error: "intessrnal server error" });
  }
};


export const getMessages = async (req,res)=>{
  try {
    const {id:userIdToChat} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants : {$all :[senderId, userIdToChat]},
    }).populate("messages");

    if(!conversation){
      return res.status(200).json([]);
    }

    const messages = conversation.messages

    res.status(200).json(messages);

  } catch (error) {
    console.log("error in getmessages controller", error);
    res.status(500).json({ error: "internal server error" });
  }
};

