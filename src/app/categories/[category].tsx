import {useRouter} from 'next/router';

const Category = () => {
  const router = useRouter();
  const {category} = router.query;
  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
}