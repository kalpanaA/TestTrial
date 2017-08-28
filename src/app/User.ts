export class User { 
     username:string;  
     name: string; 
     active: boolean;
     userId:number
    
     constructor(userId:number,username:string){
         this.userId=userId;
         this.username=username;
     }
 
}
