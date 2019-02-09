
 class DoublyLinkedList{

    constructor(){
        this.head = null; // reference, ~pointer
        this.tail = null; // reference, ~pointer
    }

    add(pElement){
        let listItem = new ListItem(pElement);

        if(this.head == null || this.tail == null){ // initial
            this.head = listItem;
            this.tail = listItem;
        }else{ // subsequent calls
            this.tail.setNext(listItem);
            listItem.setPrevious(this.tail);
            this.tail = listItem;
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
        let iterator = this.head; 
        let counter = 0;
        while(iterator.getNext()!=null){
            if(counter==pIndex){
                return iterator.data();
            }
            iterator = iterator.getNext();
            counter++;
        }
    }

    size(){
        let iterator = this.head;
        let counter = 0;
        while(iterator.getNext()!=null){
            iterator = iterator.getNext();
            counter++;
        }

        return counter;
    }
 }
