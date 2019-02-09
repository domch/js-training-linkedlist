

/**
 * Listemizin asagidaki yapilari var:
 * - List Container
 * - ListeItem
 * - Herbir ListItem'in bir sonraki ListItem'i gösteren "next" göstergesi var.
 * - Herbir ListItem'in bir önceki ListItem'i gösteren "previous" göstergesi var.
 * - Listenin basini gösteren "head" göstergesi
 * - Listenin sonunu gösteren "tail" göstergesi 
 * 
 * 
 * Technical Solution
 */

 class DoublyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(pElement){
        if(this.head == null || this.tail == null){ // initial
            this.head = pElement;
            this.tail = pElement;
        }else{ // subsequent calls
            this.tail.setNext(pElement);
            pElement.setPrevious(this.tail);
            this.tail = pElement;
        }
    }

    remove(pIndex){
        let toBeRemoved = this.get(pIndex);
        let nextElement = toBeRemoved.getNext(); // gülümse
        let previousElement = toBeRemoved.getPrevious(); // itirazim var.

        if(nextElement==null){ // en sondaki elemanin kendisiyim
            previousElement.setNext(null);
        }else if (previousElement==null){ // en bastaki elemanin kendisiyim
            nextElement.setPrevious(null);
        }else{ // arada bir yerdeyim.
            nextElement.setPrevious(previousElement);
            previousElement.setNext(nextElement);
        }
    }

    clear(){
        this.head = null;
        this.tail = null;
    }

    /**
     * pIndex'indeki elemani geri getir.
     * @param {number} pIndex 
     */
    get(pIndex){
        let tmp = this.head;
        let i = 0;
        while(tmp.getNext()!=null){
            if(i==pIndex){
                return tmp;
            }
            tmp = tmp.getNext();
            i++;
        }
    }

    size(){

    }
 }


 class ListItem{

    constructor(pItem){
        this.object = pItem;
        this._next = null;
        this._prev = null;
    }
    
    getNext(){
        return this._next;
    }

    setNext(pNextItem){
        this._next = pNextItem;
    }

    getPrevious(){
        return this._prev;
    }

    setPrevious(pPreviousItem){
        this._prev = pPreviousItem;
    }
 }



 /**
  * Business Domain
  */
 class Song{
     constructor(pTitle, pSinger, pUrl){
        this.title = pTitle;
        this.singer = pSinger;
        this.url = pUrl;
     }

     play(){
         // real play logic
     }
 }




 class PlayList{
    constructor(){
        this.list = new DoublyLinkedList();
        this.currentSong = null;
        this.position = 0;
    }

    addNewSong(pPlayListItem){
        this.list.add(new ListItem(pPlayListItem));
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
