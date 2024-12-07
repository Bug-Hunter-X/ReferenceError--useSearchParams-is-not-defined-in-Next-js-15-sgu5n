```javascript
// pages/aboutSolution.js
import { useRouter, useSearchParams } from 'next/navigation';

export default function About() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useSearchParams();

  // Access search parameters
  const myParam = searchParams.get('myParam');

  return (
    <div>
      <h1>About Page</h1>
      <p>Some content</p>
      <p>Parameter: {myParam}</p>
    </div>
  );
}
```