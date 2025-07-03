const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const categories = {
  "now-playing": [
    {
      title: "Elemental",
      overview: "Fire meets Water.",
      poster_path: "",
      vote_average: 6.8
    },
    {
      title: "Inside Out 2",
      overview: "New emotions join the party.",
      poster_path: "https://i5.walmartimages.com/asr/38c5952d-b75c-42e5-9486-6bae68fe727c_1.24b96bbc17818b921bee32b51270053e.jpeg",
      vote_average: 7.9
    }
  ],
  popular: [
    {
      title: "Spider-Man: No Way Home",
      overview: "Peter Parker faces multiverse chaos.",
      poster_path: "https://i5.walmartimages.com/asr/38c5952d-b75c-42e5-9486-6bae68fe727c_1.24b96bbc17818b921bee32b51270053e.jpeg",
      vote_average: 8.5
    }
  ],
  "top-rated": [
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/talentles-nana.jpg',
      vote_average: 9.8
    },
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/shikimori.jpg',
      vote_average: 9.8
    },
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/pasir.jpg',
      vote_average: 9.7
    },
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/apotek.jpg',
      vote_average: 9.7
    },
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/selection.jpg',
      vote_average: 9.7
    }
  ],
  trending: [
    {
      title: "Deadpool & Wolverine",
      overview: "Unexpected team-up.",
      poster_path: "/source/demon.jpg",
      vote_average: '#1'
    },
    {
      title: "Deadpool & Wolverine",
      overview: "Unexpected team-up.",
      poster_path: "/source/cels.jpg",
      vote_average: '#2'
    },
    {
      title: "Deadpool & Wolverine",
      overview: "Unexpected team-up.",
      poster_path: "/source/Spirited away.jpg",
      vote_average: '#3'
    },
    {
      title: "Deadpool & Wolverine",
      overview: "Unexpected team-up.",
      poster_path: "/source/anne",
      vote_average: '#4'
    },
    {
      title: "Deadpool & Wolverine",
      overview: "Unexpected team-up.",
      poster_path: "/source/haikyu.jpg",
      vote_average: '#5'
    }
  ]
};

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach(({ title, poster_path, vote_average, overview }) => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img src="${poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h4>Overview:</h4>
        ${overview}
      </div>
    `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) return 'green';
  else if (vote >= 5) return 'orange';
  else return 'red';
}

function showHome() {
  main.innerHTML = `
    <div class="home-text">
      <h2>Welcome to Movie Web App 🎬</h2>
      <p>Lorem ipsum dolororem ipsum dolor sit amet consectetur adipisicing elit. In accusamus mollitia, recusandae nobis quos amet qui consectetur iure natus velit alias maxime a dicta eveniet enim at magni voluptatum. Ab. sit, amet consectetur adipisicing elit. Nostrum nisi magnam quia. Id at quo et molestiae possimus quaerat voluptates, dolorem exercitationem perferendis, repudiandae architecto fugiat reprehenderit necessitatibus nesciunt repellendus!</p>
    </div>
  `;
}

function setActive(element, category) {
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  element.classList.add('active');

  if (category === 'home') {
    showHome();
  } else {
    showMovies(categories[category] || []);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value.toLowerCase();
  const currentCategory = document.querySelector('nav a.active').getAttribute('onclick').match(/'(.+)'/)[1];

  if (currentCategory === 'home') return;

  const filtered = categories[currentCategory].filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
  );
  showMovies(filtered);
});

showHome();
