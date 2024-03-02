import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {

  const videos = [
    { id: 1, title: "The Best app", thumbnail: "https://i.ytimg.com/vi/sUOXopEkrDE/maxresdefault.jpg", duration: "offlinetv 1.7m" },
    { id: 2, title: "Game beast or wot?", thumbnail: "https://th.bing.com/th/id/OIP.PtiWFnfWRnVeycwHO6NkkwHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "TheGametv        1.1M views" },
    { id: 3, title: "Random homiestuff!", thumbnail: "https://th.bing.com/th/id/OIP.JQNpA4sWkwGx8eRaGgkg_AHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "Homietown        987k " },
    { id: 4, title: "Who's the better?", thumbnail: "https://th.bing.com/th/id/OIP.gR_ITzpVlvgcVBUfC170uQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "f1             2.3M" },
    { id: 5, title: "Most underrated youtuber?!", thumbnail: "https://th.bing.com/th/id/OIP.ebruzQflQuEYGmrpriZoRAHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "Saiman Says       333k" },
    { id: 6, title: "Game Review boom!", thumbnail: "https://th.bing.com/th/id/OIP.kF0Fz1QMmLAJN26mOoDZWgHaEk?w=294&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "gamefreak        3.7M" },
    { id: 7, title: "f1 2013 highlights", thumbnail: "https://th.bing.com/th/id/OIP.3MXoXNNDSjkejRP2Tvoi1QHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "f1         2.2M" },
    { id: 8, title: "Come dive with me eh!", thumbnail: "https://th.bing.com/th/id/OIP.DRKy9SO0JJjymSgJAVylDQHaEY?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "Travelguide       3.2M" },
    { id: 9, title: "Music mix", thumbnail: "https://th.bing.com/th/id/OIP.7xt7RJxReVRMa1MHcqv_9AHaEK?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "musix        1M" },
    { id: 10, title: "Phir Kabhi", thumbnail: "https://th.bing.com/th/id/OIP.nH47OlUhiPn7hlRm9oWXAQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "welobemusic        10M" },
    { id: 11, title: "Best of house music", thumbnail: "https://th.bing.com/th/id/OIP.jCkVtoHcV9zifM1GndRlKQHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "Musicworld        1.1M" },
    { id: 12, title: "Bollywood old hits", thumbnail: "https://th.bing.com/th/id/OIP.3cRig-zEQUb8kVfMlfIn4AHaEK?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "bollyworld         1.5M" },
    { id: 13, title: "Best youtube thumbnails", thumbnail: "https://th.bing.com/th/id/OIP.gnav-1GFhaqcxiJVZNfKgwFNC7?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "Thumbnailfiles        2.7M" },
    { id: 1, title: "The Best app", thumbnail: "https://i.ytimg.com/vi/sUOXopEkrDE/maxresdefault.jpg", duration: "offlinetv 1.7m" },
    { id: 2, title: "Game beast or wot?", thumbnail: "https://th.bing.com/th/id/OIP.PtiWFnfWRnVeycwHO6NkkwHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "TheGametv        1.1M views" },
    { id: 3, title: "Random homiestuff!", thumbnail: "https://th.bing.com/th/id/OIP.JQNpA4sWkwGx8eRaGgkg_AHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "Homietown        987k " },
    { id: 4, title: "Who's the better?", thumbnail: "https://th.bing.com/th/id/OIP.gR_ITzpVlvgcVBUfC170uQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "f1             2.3M" },
    { id: 5, title: "Most underrated youtuber?!", thumbnail: "https://th.bing.com/th/id/OIP.ebruzQflQuEYGmrpriZoRAHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "Saiman Says       333k" },
    { id: 6, title: "Game Review boom!", thumbnail: "https://th.bing.com/th/id/OIP.kF0Fz1QMmLAJN26mOoDZWgHaEk?w=294&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "gamefreak        3.7M" },
    { id: 7, title: "f1 2013 highlights", thumbnail: "https://th.bing.com/th/id/OIP.3MXoXNNDSjkejRP2Tvoi1QHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "f1         2.2M" },
    { id: 8, title: "Come dive with me eh!", thumbnail: "https://th.bing.com/th/id/OIP.DRKy9SO0JJjymSgJAVylDQHaEY?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "Travelguide       3.2M" },
    { id: 9, title: "Music mix", thumbnail: "https://th.bing.com/th/id/OIP.7xt7RJxReVRMa1MHcqv_9AHaEK?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "musix        1M" },
    { id: 10, title: "Phir Kabhi", thumbnail: "https://th.bing.com/th/id/OIP.nH47OlUhiPn7hlRm9oWXAQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "welobemusic        10M" },
    { id: 11, title: "Best of house music", thumbnail: "https://th.bing.com/th/id/OIP.jCkVtoHcV9zifM1GndRlKQHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "Musicworld        1.1M" },
    { id: 12, title: "Bollywood old hits", thumbnail: "https://th.bing.com/th/id/OIP.3cRig-zEQUb8kVfMlfIn4AHaEK?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "bollyworld         1.5M" },
    { id: 13, title: "Best youtube thumbnails", thumbnail: "https://th.bing.com/th/id/OIP.gnav-1GFhaqcxiJVZNfKgwFNC7?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", duration: "Thumbnailfiles        2.7M" },

  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('relevance');
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())

  );

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);

  };

  return (
    <div className="homepage">
      {/* Styles */}
      <style>
        {`

/* Navbar styles */
.navbar {
  background-color: #f00;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.toggle-icon {
  margin-right: 10px;
  cursor: pointer;
}

.search {
  position: relative; /* Make search bar relative for absolute positioning */
  display: flex;
  align-items: center;
  border-radius: 20px; /* Rounded edges for search bar */
  overflow: hidden; /* Hide overflow for rounded edges */
}

.search input[type="text"] {
  flex: 1; /* Take remaining space */
  padding: 5px;
  border: none;
  outline: none;
}

.search button {
  background-color: #fff;
  color: #f00;
  border: 1px solid #f00;
  border-radius: 0 20px 20px 0; /* Rounded edges for search button */
  padding: 5px 10px;
  cursor: pointer;
}

.profile {
  margin-left: 10px;
}

.profile img {
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
  border-radius: 50%; /* Make it circular */
}

/* Sidebar styles */
.sidebar {
  background-color: #333;
  color: #fff;
  padding: 10px;
  width: ${sidebarOpen ? '200px' : '0'};
  overflow: hidden;
  transition: width 0.5s;
  cursor: pointer;
  position: fixed;
  top: 0;
  left: ${sidebarOpen ? '0' : '-200px'};
  height: 100%;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
  display: ${sidebarOpen ? 'block' : 'none'};
  position: relative;
}

.sidebar li:hover {
  background-color: #555;
}

.sidebar li::before {
  content: '\\1F4E5'; /* Unicode for file icon */
  font-size: 16px;
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
}

/* Video grid styles */
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-left: ${sidebarOpen ? '200px' : '50px'};
}

/* Video card styles */
.video-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.video-card:hover {
  transform: translateY(-5px);
}

.video-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.video-info {
  padding: 15px;
}

.video-info h3 {
  margin: 0;
  font-size: 18px;
  line-height: 1.4;
}

.video-info p {
  margin: 8px 0 0;
  color: #606060;
}

          
        `}
      </style>

      {/* Navbar */}
{/* Navbar */}
<div className="navbar">
  <div className="toggle-icon" onClick={toggleSidebar}>&#9776;</div>
  <div className="logo">
    <img src="https://cdn-icons-png.flaticon.com/128/1383/1383260.png" alt="YouTube" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
    YouTube
  </div>
  <div className="search">
    <input 
      type="text" 
      placeholder="Search" 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button>Search</button>
  </div>
  <div className="profile">
        <Link to="/login">
          <img src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="Profile" />
        </Link>
      </div>
</div>


      {/* Sidebar with options */}
{/* Sidebar with options */}
<div className="sidebar">
        <ul>
          <li onClick={closeSidebar}>Home</li>
          <li onClick={closeSidebar}>Shorts</li>
          <li onClick={closeSidebar}>Subscriptions</li>
          <li onClick={closeSidebar}>Your Profile</li>
          <li onClick={closeSidebar}>History</li>
          <li onClick={closeSidebar}>Your Videos</li>
          <li onClick={closeSidebar}>Watch Later</li>
          <li onClick={closeSidebar}>Subscriptions</li>
          {/* Add more options as needed */}
        </ul>
      </div>

      {/* Video cards */}
      <div className="video-grid">
        {filteredVideos.map(video => (
          <div key={video.id} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

































































/*
1
git --version
mkdir
cd
git init
git status
>echo>test.txt
echo "hello how are you">test.txt
git status
git add test.txt
git commit -m "first commit"

2.
git checkout -b feature_branch
git checkout feature_branch
git checkout master
git merge feature branch

3.
notepad test.txt
git status
git stash(git stash save "name")
git stash list
git stash show
git stash show -p (git stash show stash{2} -p)
git stash apply(git stash apply stash@{2})
git stash pop
git stash drop
git stash clear
git stash branch new_feature stash@{0}

4.
git clone url
git clone -b branch_name url

5.
book:
git remote add origin https://webiste
git fetch origin
git checkout -b local_branch
git fetch origin
git rebase origin/master
echo "rebasinf">test.txt
git add test.txt
got commit -m
git push origin local_branch

chatgpt:
git clone
cd website
git remote -v
git remote add new_remote https;
git remote -v
 git push new-remote feature
 git fetch new-remote
 git rebase origin/feature
git fetch origin
 git rebase origin/feature
git fetch new-remote
git rebase origin/feature
 git push new-remote feature

chat2:
mkdir 
cd init
 git remote add origin/../website
git fetch origin
git merge origin/master
git rebase origin/master

6.merge

7.
mkdir tagdemo,cd,init,echo test,commit
git tag v1.0.0
modify
echo " ddd" >>test.txt
tag v2.0
tag v3.0
git tag
git show v2.0
git diff v v
git checkout v1.0
git tag -d v2.0

8.
git branch v1,2,3
git checkout v3
dir
echo bugfix>bugfix.txt
git log --oneline
ccheckout cherry-pick hash

9.
git branch
git log --oneline
git show hash
got log -n 1 hash
git log --format=%B -n 1 hash

10.
git log --author="" --since="2023-01-01" --until="2024-12-12"

git log -n 5

12.
git revert abc
vim:esc,:wq enter
notepad :ctrl S,alt f4
(git config --global core.editor "notepad"
)
nano:ctrl o,entet,cntrl x
gedit:ctrl s ,ctrl q*/
