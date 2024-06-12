import { Injectable } from '@angular/core'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

/*@ts-ignore */
@Injectable({
  providedIn: 'root',
})
export class NarService {
  private storage = getStorage()

  uploadFile(file: File): Promise<string> {
    const fileRef = ref(this.storage, `uploads/${file.name}`)
    return uploadBytes(fileRef, file)
      .then(() => getDownloadURL(fileRef))
      .then((url) => url)
      .catch((error) => {
        console.error('Error uploading file: ', error)
        throw error
      })
  }
}
