

import  { globalConstant, filterConstant } from './constant';
import { biggestShort, sortVote } from './sortHelper';


class dataHelper {

    static save (key, value) {
        
        localStorage.setItem(key, JSON.stringify(value));
    }
     static get (key) {
       return  JSON.parse(localStorage.getItem(key));
    }
}

class filterService extends dataHelper {
    static saveFilter (value) {
        this.save(globalConstant.filterKey,value)
    }
    static getFilter () {
        return this.get(globalConstant.filterKey)
    }
}

class voteService extends dataHelper {


    static getData () {
        return this.get(globalConstant.voteKey)
    }

    static setData (data) {
        this.save(globalConstant.voteKey,data)
    }

    static addItem (newItem) {
        const filter = filterService.getFilter();
        let data = this.getData() || [];
        let lastItem = null;

        if(data && data.length > 0) { // for id primary
            data = data.sort(biggestShort("id"))
            lastItem = data[0];
        }

        data.unshift({
            id:  lastItem ? lastItem.id + 1 : 1,
            count:0,
            ...newItem
        });

        if (filter) {
            data = data.sort(sortVote());
            
            if (filter === filterConstant.type.MostVoted) {
                data = data.reverse();
            } 
        }

        this.setData(data);
    }   

}

export {    
    voteService,
    filterService
};