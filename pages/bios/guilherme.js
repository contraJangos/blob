import Layout from "../../components/layout";
import Identity from "../../components/bio/identity";

const name = "Guilherme";
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            sodales sem, vitae vulputate mauris. Suspendisse in rhoncus sapien,
            sed aliquet quam. Etiam sit amet tempus velit. Curabitur justo
            justo, semper eget consequat in, malesuada nec sem. Ut id dui vel
            velit laoreet viverra eu sit amet tortor.`;

export default function GuilhermeBio() {
  return (
    <Layout name={name} description={description}>
      <Identity name={name} description={description}></Identity>
    </Layout>
  );
}
