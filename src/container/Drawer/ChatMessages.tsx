import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Layout} from 'components';
import {IMessage} from 'interfaces/IMessage';
import {theme} from 'styles/theme';
import moment from 'moment';

const ChatMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState('');

  // Function to handle user input and provide a response
  function handleUserInput(input: string) {
    // Lowercase the input for case-insensitivity
    input = input.toLowerCase().trim();
    // Check if the input matches any of the keywords
    for (let keyword in chatbot) {
      if (input === keyword) {
        return chatbot[keyword];
      }
    }
    // If no keyword is found, return a default response
    return "I'm sorry, I don't understand what you're saying.";
  }

  const sendHandlePress = () => {
    const newMessageSend: IMessage = {
      id: new Date().getTime(),
      message,
      time: Date.now(),
      type: 'send',
    };
    const newMessageBot: IMessage = {
      id: new Date().getTime(),
      message: handleUserInput(message),
      time: Date.now(),
      type: 'receive',
    };

    setMessages([newMessageBot, newMessageSend, ...messages]);
    setMessage('');
  };

  const renderItem = ({item}: {item: IMessage}) => {
    return (
      <TouchableOpacity
        style={[
          styles.messageContainer,
          item?.type === 'send' ? styles.send : styles.receive,
        ]}>
        <Text style={styles.messageText}>{item?.message}</Text>
        <Text style={styles.time}>
          {moment(item?.time).startOf('minute').fromNow()}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Layout>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        inverted
        contentContainerStyle={{
          paddingVertical: 20,
        }}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottom}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Type something here..."
          value={message}
          onChangeText={setMessage}
        />
        {message.trim().length ? (
          <Text onPress={sendHandlePress} style={styles.sentBtn}>
            Send
          </Text>
        ) : null}
      </View>
    </Layout>
  );
};

export default ChatMessages;

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: '#cccccc99',
    borderTopWidth: 0.6,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
    maxHeight: 100,
  },
  sentBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: theme.colors.blue4,
    color: '#fff',
    borderRadius: 5,
  },

  // message styles
  messageContainer: {
    backgroundColor: theme.colors.blue4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    maxWidth: 250,
    marginBottom: 5,
  },

  send: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  receive: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    backgroundColor: '#88888899',
  },

  messageText: {
    color: '#fff',
  },
  time: {
    fontSize: 11,
    color: '#ddd',
    alignSelf: 'flex-end',
  },
});

const chatbot: any = {
  hi: 'Hello!',
  'how are you': "I'm doing well, thank you!",
  "what's up": 'Not much, how about you?',
  "what's your name": 'My name is Bot.',
  'how old are you': "I am a computer program, I don't have an age.",
  'what do you do': 'I am here to assist you with your inquiries.',
  bye: 'Goodbye!',
  'what can you do':
    'I can help you with information about our products and services.',
  'where are you from': 'I was created by a team of developers.',
  'what is your purpose': 'My purpose is to assist you with your inquiries.',
  'are you a human': 'No, I am a computer program.',
  'do you like music':
    "I am a computer program, I don't have the ability to like music.",
  'do you like sports':
    "I am a computer program, I don't have the ability to like sports.",
  'do you like movies':
    "I am a computer program, I don't have the ability to like movies.",
  'do you like books':
    "I am a computer program, I don't have the ability to like books.",
  'do you like animals':
    "I am a computer program, I don't have the ability to like animals.",
  'do you like food':
    "I am a computer program, I don't have the ability to like food.",
  'do you like to travel':
    "I am a computer program, I don't have the ability to like or dislike things.",
  'tell me a joke':
    'Why did the tomato turn red? Because it saw the salad dressing!',
  'tell me a story': 'Once upon a time, in a land far far away...',
  'how do I contact customer support':
    'You can contact our customer support team at 1-800-123-4567.',
  'what are your business hours':
    'Our business hours are from 9am to 5pm, Monday through Friday.',
  'do you offer refunds':
    'Yes, we offer refunds on certain products and services.',
  'what payment methods do you accept':
    'We accept Visa, Mastercard, American Express, and PayPal.',
  'how do I place an order':
    'You can place an order on our website or by calling our sales team.',
  'do you offer free shipping':
    'Yes, we offer free shipping on orders over $50.',
  'what is your return policy':
    'Our return policy allows for returns within 30 days of purchase.',
  'what is your exchange policy':
    'Our exchange policy allows for exchanges within 30 days of purchase.',
  'how do I track my order':
    'You can track your order on our website or by contacting our customer support team.',
  'what is your warranty policy':
    'Our warranty policy covers our products for up to one year from the date of purchase.',
  'how do I cancel my order':
    'You can cancel your order by contacting our customer support team.',
  'what is your privacy policy':
    'Our privacy policy outlines how we handle your personal information.',
  'what is your security policy':
    'Our security policy outlines how we protect your personal information.',
  'what are your terms of service':
    'Our terms of service outline the agreement between us and our customers.',
  'how do I reset my password':
    "You can reset your password by clicking the 'forgot password' link on our login page.",
  'what are your shipping options':
    'We offer standard and expedited shipping options, with varying delivery times and costs.',
  'how do I return a product':
    'You can initiate a return by contacting our customer support team.',
  'can I change my order after it has been placed':
    'It depends on the status of your order, please contact our customer support team to inquire about changes.',
  'what is your price matching policy':
    'We offer price matching on certain products, please contact our sales team for more information.',
  'what are your best-selling products':
    'Our best-selling products include our premium line of headphones and our state-of-the-art smartwatches.',
  'what is the status of my order':
    'You can check the status of your order on our website or by contacting our customer support team.',
  'how long does it take to process my order':
    'Processing times vary depending on the product and shipping option selected.',
  'what are your technical specifications for your products':
    'You can find detailed technical specifications on our website under the product description.',
  'what is your loyalty program':
    'We offer a loyalty program for frequent customers, please visit our website for more information.',
  'what is your referral program':
    'We offer a referral program for customers who refer new customers to our company, please visit our website for more information.',
  'what is your social media handle':
    'You can follow us on social media at @OurCompany.',
  'how do I leave a product review':
    'You can leave a product review on our website under the product description.',
  'what are your career opportunities':
    'We have a variety of career opportunities available, please visit our website for more information.',
  'how do I become a partner':
    'You can inquire about partnership opportunities by contacting our business development team.',
  'what is your mission statement':
    'Our mission is to provide high-quality products and services to our customers.',
  'what is your vision statement':
    'Our vision is to become a leader in the industry by continuously innovating and improving.',
  'what is your company history':
    'Our company was founded in 1995 and has since grown into a global brand.',
  'what is your company culture':
    'Our company culture is centered around teamwork, innovation, and excellence.',
  'what is your environmental policy':
    'Our environmental policy outlines our commitment to sustainable practices and reducing our carbon footprint.',
  help: 'I can help you with information about our products and services',
  'what time is it': 'The current time is: ' + new Date().toLocaleTimeString(),
  "what's the weather like":
    "I'm sorry, I can't give you the current weather. Please check your local weather forecast.",
  "what's the time": 'The current time is: ' + new Date().toLocaleTimeString(),
  "What's the date today": "Today's date is " + new Date().toLocaleDateString(),
  "what's the temperature":
    "I'm sorry, I can't give you the current temperature. Please check your local weather forecast.",
  'how to make coffee':
    'To make coffee, you will need fresh coffee beans, a coffee grinder, a coffee maker, and water. First, grind the coffee beans and add them to the coffee maker. Next, add water to the coffee maker and turn it on. Once the coffee is done brewing, pour it into a cup and enjoy!',
  'define love':
    'Love is a strong feeling of affection and attachment towards someone.',
  'define happiness':
    'Happiness is a state of being that is characterized by feelings of contentment, satisfaction, and joy.',
  'define success': 'Success is the achievement of a desired goal or outcome.',
  'define freedom':
    'Freedom is the power or right to act, speak, or think as one wants without hindrance or restraint.',
  'define peace':
    'Peace is a state of tranquility and quiet, freedom from disturbance or violence.',
  'define courage':
    'Courage is the ability to confront fear, pain, danger, uncertainty, or intimidation.',
  'define kindness':
    'Kindness is the quality of being friendly, generous, and considerate.',
  'define intelligence':
    'Intelligence is the ability to acquire and apply knowledge and skills.',
  'define wisdom':
    'Wisdom is the ability to think and act using knowledge, experience, understanding, common sense, and insight.',
};
