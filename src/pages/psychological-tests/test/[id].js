import TestPage from '../../../components/TestPage';

export default function TestPageWrapper({ id }) {
  return <TestPage id={id} />;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  return {
    props: {
      id,
    },
  };
}