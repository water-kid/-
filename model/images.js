class Images{

     images=[]

     addImage(url){
        this.images.push(url)
    }

    constructor() {
        this.addImage("/images/111.jpg");
        this.addImage("/images/222.png");
        this.addImage("/images/333.png")
        this.addImage("/images/444.png")
    }



    randomImage(){
         var index = Math.floor(Math.random()*this.images.length);
         console.log("index ...",index)
         return this.images[index]
    }
}

export {
    Images
}
