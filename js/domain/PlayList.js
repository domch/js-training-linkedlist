
 class PlayList{
    constructor(){
        this.list = new DoublyLinkedList();
        this.currentSong = null;
        this.position = 0;
    }

    addNewSong(pPlayListItem){
        this.list.add(pPlayListItem);
    }

    removeSong(pIndex){
        // ootional: sarkiyi arama bulma
        this.list.remove(pIndex);
    }

    run(){
        this.currentSong = this.list.get(this.position);
        this.currentSong.play();
    }

    next(){
        ++this.position;
        this.play();
    }

    previous(){
        --this.position;
        this.play();
    }

    pause(){
        // not implemented!
    }
 }
