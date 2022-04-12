import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ActionCard from "../components/ActionCard";
import { Slider, SliderItem, Title, TextTitle } from "./Home.style";
import { DataTitle, DataCard } from "../static/Data";

interface Props {
  backgroundColor?: string;
}
const Home: NextPage = ({ backgroundColor}: Props) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Title>
          <TextTitle>{DataTitle[0].title}</TextTitle>
        </Title>
        <Slider>
          <SliderItem style={{ display: "flex", justifyContent: "center" }}>
            {DataCard.map((item: any, index: number) => (
              <ActionCard
                textCard={item.title}
                img={item.img}
              />
            ))}
          </SliderItem>
        </Slider>
      </>
    </div>
  );
};

export default Home;
