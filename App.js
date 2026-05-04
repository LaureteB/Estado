import { View, Text, Button } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [like, setLike] = useState(0);
  return (
    <View style={{marginTop: 50, alignItems:'center'}}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Likes: {like}</Text>
      <Button 
      title='👍'
      color="#4CAF50"
      onPress={()=> setLike(like + 1)}/>
      <Button 
      title='👎'
      color="#F44336"
      onPress={()=> setLike(like - 1)}/>
    </View>
  );
}
