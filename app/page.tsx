'use client';
import Form from "./components/form";
import News from "./components/news";
import Questions from "./components/questions";
import Reviews from "./components/reviews";
import ThirdBlock from "./components/third-block";
import Works from "./components/works";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

export default function Home() {
  return (
    <Provider store={store}>
      <div className="main">
        <Works></Works>
        <ThirdBlock></ThirdBlock>
        <Reviews></Reviews>
        <Questions></Questions>
        <News></News>
        <Form></Form>
      </div>
    </Provider>
  );
}
