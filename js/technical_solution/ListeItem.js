
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

    data(){
        return this.object;
    }
 }

