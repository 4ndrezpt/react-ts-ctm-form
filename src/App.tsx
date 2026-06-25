import { useState } from 'react'
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ReceiverForm } from "./components/ReceiverForm";

export const App = () => {
  const localValue = window.matchMedia('(prefers-color-scheme: dark}').matches;
  const [isDark, setIsDark] = useState(localValue)//useLocalStorage("isDark",false);

  return (
    <div className="App"
      data-theme={ isDark ? "dark" : "light"}
    >
      <Navbar
        title="Todo-App"
        subheading="Todo-app made with TS using custom Forms/hooks"
        isChecked={isDark}
        handleChange={()=>setIsDark(!isDark)}
      >
      </Navbar>

      <section>
        <ReceiverForm></ReceiverForm>
      </section>
      <Footer>
      </Footer>

    </div>
  );
}
