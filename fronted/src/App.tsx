import Header from "@/components/Header/Header.tsx";
import {Button} from "@/components/ui/button.tsx";

const App = () => (
    <>
        <header>
            <Header/>
        </header>
        <main>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div>
                <Button>Click me</Button>
                <Button>Click 2</Button>
            </div>
        </main>
        <footer>

        </footer>
    </>
);

export default App
