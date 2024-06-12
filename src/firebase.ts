import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBharaBsqXsjfDFnAqdzTA1hLKOlX1Pcbs',
  authDomain: 'caliente-4544b.firebaseapp.com',
  projectId: 'caliente-4544b',
  storageBucket: 'caliente-4544b.appspot.com',
  messagingSenderId: '112872913118',
  appId: '1:112872913118:web:84f16be0f00c3c69836a4f',
  measurementId: 'G-RRE2RZ8SDQ',
}
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { app , storage }
