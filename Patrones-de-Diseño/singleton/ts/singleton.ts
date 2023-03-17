class SingletonTS{
    private static instance: SingletonTS;
    public random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS{
        if(!this.instance){
            
            this.instance = new SingletonTS();
        }

        return this.instance;
    }
}

const singleton1 = SingletonTS.getInstance();
const newSingletom = SingletonTS.getInstance();
singleton1.random = 7;
console.log(singleton1.random);
console.log(newSingletom.random);
console.log(singleton1 === newSingletom);
