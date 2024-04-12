// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// // import RestoreIcon from '@material-ui/icons/Restore';
// // import FavoriteIcon from '@material-ui/icons/Favorite';
// // import LocationOnIcon from '@material-ui/icons/LocationOn';
// //从外部引入样式，然后把第五行的替换掉，在34行修改icon为timelineicon;是因为安装了material的ui库，所以才可以使用他的样式
// import TimelineIcon from '@material-ui/icons/Timeline';
// import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
// import TvIcon from '@material-ui/icons/Tv';
// import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     position:"fixed",
//     bottom:"0",  //配合位置把导航栏固定在视窗最下面
//     backgroundColor:"#2d313a",
//     zIndex:"100"
//   },
//   selectedText: {
//     transform: 'scale(1.4)' // 放大效果
//   },
//   selectedIcon: {
//     color: 'gold', // 图标的金色
//   }
// });

// export default function SimpleBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//   const [selectedValue, setSelectedValue] = React.useState(0);
//   // const [selectedIcon,setSelectedIcon] = React.useState(0)

//   return (
//       <BottomNavigation
//          value={value}
//          onChange={(event, newValue) => {
//            setValue(newValue);
//            setSelectedValue(newValue); // 更新选中的导航项
//          }}
//          showLabels
//          className={classes.root}
//       >
//       <BottomNavigationAction
//          label="Trending"
//          icon={<TimelineIcon className={selectedValue === 0 ? classes.selectedIcon : ''} />}
//          style={{ color: 'white' }}
//          className={selectedValue === 0 ? classes.selectedText : ''}
//          />
//       <BottomNavigationAction 
//          label="Movies" 
//          icon={<LocalMoviesIcon className={selectedValue === 0 ? classes.selectedIcon : ''} />}
//          style={{color:'white'}}
//          className={selectedValue === 1 ? classes.selectedText : ''}
//          />
//       <BottomNavigationAction 
//          label="TV series" 
//          icon={<TvIcon className={selectedValue === 0 ? classes.selectedIcon : ''} />} 
//          style={{color:'white'}}
//          className={selectedValue === 2 ? classes.selectedText : ''}
//          />
//       <BottomNavigationAction 
//          label="Search" 
//          icon={<YoutubeSearchedForIcon className={selectedValue === 0 ? classes.selectedIcon : ''} />} 
//          style={{color:'white'}}
//          className={selectedValue === 3 ? classes.selectedText : ''}
//          />
//     </BottomNavigation>
//   );
// }

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TimelineIcon from '@material-ui/icons/Timeline';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import TvIcon from '@material-ui/icons/Tv';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#39445a",
    zIndex: "100"
  },
  selectedText: {
    transform: 'scale(1.4)'
  },         //不需要另外设置css
  selectedIcon: {
    color: 'gold'
  }     //先设置要改变的样式
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);  //给一个state，当发生改变的时候进行操作
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}   //setvalue的值会更新
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Trending"
        icon={<TimelineIcon className={value === 0 ? classes.selectedIcon : ''} />}
        style={{ color: 'white' }}
        className={value === 0 ? classes.selectedText : ''}
      />
      <BottomNavigationAction
        label="Movies"
        icon={<LocalMoviesIcon className={value === 1 ? classes.selectedIcon : ''} />}
        style={{ color: 'white' }}
        className={value === 1 ? classes.selectedText : ''}
      />
      <BottomNavigationAction
        label="TV series"
        icon={<TvIcon className={value === 2 ? classes.selectedIcon : ''} />}
        style={{ color: 'white' }}
        className={value === 2 ? classes.selectedText : ''}
      />
      <BottomNavigationAction
        label="Search"
        icon={<YoutubeSearchedForIcon className={value === 3 ? classes.selectedIcon : ''} />}
        style={{ color: 'white' }}
        className={value === 3 ? classes.selectedText : ''}
      />
    </BottomNavigation>
  );
}