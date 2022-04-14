//FieldManager
export class ControlMind {
    componentRef = null;
    constructor() {

    }
    setComponentRef = (ref) => {
        this.componentRef = ref;
        console.log("mbrook got the ref")
    }
    saySomething = () => {
        setTimeout(() => {
            try {

                this.componentRef.forceUpdate("In another world ")
                console.log("worked")

            } catch (error) {
                console.log("no")
            }
        }, 1000)
    }

}