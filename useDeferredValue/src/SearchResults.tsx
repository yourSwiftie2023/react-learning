// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

const cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url) {
  if (url.startsWith("/search?q=")) {
    return await getSearchResults(url.slice("/search?q=".length));
  } else {
    throw Error("Not implemented");
  }
}

async function getSearchResults(query) {
  // Add a fake delay to make waiting noticeable.
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  const allAlbums = [
    {
      id: 13,
      title: "Let It Be",
      year: 1970,
    },
    {
      id: 12,
      title: "Abbey Road",
      year: 1969,
    },
    {
      id: 11,
      title: "Yellow Submarine",
      year: 1969,
    },
    {
      id: 10,
      title: "The Beatles",
      year: 1968,
    },
    {
      id: 9,
      title: "Magical Mystery Tour",
      year: 1967,
    },
    {
      id: 8,
      title: "Sgt. Pepper's Lonely Hearts Club Band",
      year: 1967,
    },
    {
      id: 7,
      title: "Revolver",
      year: 1966,
    },
    {
      id: 6,
      title: "Rubber Soul",
      year: 1965,
    },
    {
      id: 5,
      title: "Help!",
      year: 1965,
    },
    {
      id: 4,
      title: "Beatles For Sale",
      year: 1964,
    },
    {
      id: 3,
      title: "A Hard Day's Night",
      year: 1964,
    },
    {
      id: 2,
      title: "With The Beatles",
      year: 1963,
    },
    {
      id: 1,
      title: "Please Please Me",
      year: 1963,
    },
  ];

  const lowerQuery = query.trim().toLowerCase();
  return allAlbums.filter((album) => {
    const lowerTitle = album.title.toLowerCase();
    return (
      lowerTitle.startsWith(lowerQuery) ||
      lowerTitle.indexOf(" " + lowerQuery) !== -1
    );
  });
}

// Note: this component is written using an experimental API
// that's not yet available in stable versions of React.

// For a realistic example you can follow today, try a framework
// that's integrated with Suspense, like Relay or Next.js.

export default function SearchResults({ query }) {
  if (query === "") {
    return null;
  }
  const albums = use(fetchData(`/search?q=${query}`));
  if (albums.length === 0) {
    return (
      <p>
        No matches for <i>"{query}"</i>
      </p>
    );
  }
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}
