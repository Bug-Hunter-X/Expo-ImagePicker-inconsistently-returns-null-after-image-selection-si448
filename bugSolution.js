```javascript
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.cancelled) {
    console.log('Image selection cancelled.');
    return null; 
  }
  if (result.uri === null) {
    console.log('ImagePicker returned null. Retrying...');
    //Implement retry mechanism here (e.g., call pickImage() again after a delay)
    return await pickImage() // Retry the image picking process.
  }

  console.log('Image selected:', result.uri);
  // Proceed with image processing using result.uri
  return result.uri;
}
export default pickImage; 
```