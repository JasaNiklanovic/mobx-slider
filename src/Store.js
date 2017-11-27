import { extendObservable, computed } from 'mobx'
import { fetchImages } from './services/Api'
class Store {
    constructor() {
      extendObservable(this, {
        images: [],
        currentImage: computed(() => this.images[this.currentImageOffset]),
        page: 0,
        currentImageOffset: 0,   
        imagesPerPage: 10,   
        loading: true,  
      })
    }

    async fetchImages() {
      this.loading = true
      const images = await fetchImages(this.page + 1);
      this.images.push(...images)
      this.page++
      this.loading = false
    }

    prev = () => {
      this.currentImageOffset--
      this.loadMore()
    }

    next = () => {
      this.currentImageOffset++
      this.loadMore()
    }

    loadMore() {
      if(this.currentImageOffset > ((this.imagesPerPage - 1) * this.page)){
        this.fetchImages()
      }else{
        // do nothing
      }
    }
}

export default Store