import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Post from "../components/post/post";
import Photo from "../components/round_photo/rount_photo";

import utilStyles from "../styles/utils.module.css";

export default function Home() {
  const names = ["Guilherme", "Fabio", "Juliane"];

  const header = {
    date: "18 de Março, 2021",
    author: "Guilherme",
  };

  const title = "Test title";
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            sodales sem, vitae vulputate mauris. Suspendisse in rhoncus sapien,
            sed aliquet quam. Etiam sit amet tempus velit. Curabitur justo
            justo, semper eget consequat in, malesuada nec sem. Ut id dui vel
            velit laoreet viverra eu sit amet tortor.`;

  return (
    <Layout>
      <div className="grid">
        <section>
          <h1 className={utilStyles.liner}>News</h1>
          <Post header={header} title={title} description={description}></Post>
          <Post header={header} title={title} description={description}></Post>
          <Post header={header} title={title} description={description}></Post>
        </section>
        <section>
          <h1 className={utilStyles.liner}>Devs</h1>
          <div className={utilStyles.homePhotos}>
            <Photo names={names}></Photo>
          </div>
        </section>
      </div>
    </Layout>
  );
}
