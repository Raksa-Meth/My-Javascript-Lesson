let restaurant = {
    name : 'Restaurant April',
    guestCapacity : 40,
    guestCount : 0,
    checkAvailability : function(guestNumber){
        newGuestCount = this.guestCount + guestNumber
        isSeatAvailable = newGuestCount <= this.guestCapacity
        if(isSeatAvailable){
            console.log('You can book the seats.')
        }else {
            console.log('Seats are full.')
        }
        return isSeatAvailable
    },
    bookTheSeat : function(guestNumber){
        if(this.checkAvailability){
            this.guestCount = this.guestCount + guestNumber
        }else {
            console.log('Seats are full.')
        }
    }
}

restaurant.checkAvailability(4)
restaurant.bookTheSeat(4)
restaurant.checkAvailability(10)
restaurant.bookTheSeat(10)
restaurant.checkAvailability(20)
restaurant.bookTheSeat(20)
restaurant.checkAvailability(10)
restaurant.bookTheSeat(10)