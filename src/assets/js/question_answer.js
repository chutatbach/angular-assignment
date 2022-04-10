object_add = {
    index: 0,
    add:function add_element() {
        this.index++
        let a = document.querySelector('.add_element')
        let c = document.createElement('div')
        c.classList.add('elemented')
        c.innerHTML = `<div class="form-label-group"> <input type="text" class="form-control p-2"
        [(ngModel)]="AnswerPut.text[${this.index}]" placeholder="Answers"></div>
    <div class="d-flex justify-content-center align-content-cente form-label-group"  *ngIf="active_show == true">
    <div class="my-1">True:
    <input type="radio" class="" name="1" [value]="add_check[0]">
    False:
    <input type="radio" class="" name="1" [value]="add_check[1]">
    <div class="btn btn-danger delete">delete</div> 
    </div>
    </div>
    `
        a.appendChild(c)
        del = document.querySelectorAll('.delete')
        all = document.querySelectorAll('.elemented')
        del.forEach((val,index)=> {
            val.onclick = function(value){
                a.removeChild(a.children[1])
            }
        });
    },
    close:function(){
        document.querySelector('.elemented').innerHTML = `<div class="form-label-group"> <input type="text" class="form-control p-2"
        [(ngModel)]="AnswerPut.text[0]" placeholder="Answers"></div>
    <div class="d-flex justify-content-center align-content-cente form-label-group"  *ngIf="active_show == true">
    <div class="my-1">True:
    <input type="radio" class="" name="1" [value]="add_check[0]">
    False:
    <input type="radio" class="" name="1" [value]="add_check[1]">
    <div class="btn btn-danger delete">delete</div> 
    </div>
    
    </div>`
    }
}

