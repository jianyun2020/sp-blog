import React from "react";
import Styles from "../../styles/pages.module.scss";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default class Post extends React.Component {
  state = {
    ulDom: null,
    aDom: null,
  };

  componentDidMount() {
    const uld = document.querySelector(".list-class");
    this.setState({ ulDom: uld });
    uld.addEventListener("click", this.handleClick);
  }

  componentDidUpdate() {
    console.log("DidUpdate");
  }

  handleClick = (event) => {
    const target = event.target;
    if (target.tagName === 'A') {
      if (this.state.aDom) {
        this.state.aDom.classList.remove('active')
      }
      this.setState({aDom: target}, () => {
        this.state.aDom.classList.add('active')
      })
    }
  };

  componentWillUnmount() {
    this.state.ulDom.removeEventListener('click', this.handleClick)
  }

  render() {
    const { postData } = this.props;
    const contentArr = postData.contentHtml.split("</nav>");
    const nav = contentArr[0] + "</nav>";
    const content = contentArr[1];

    return (
      <>
        <article className={Styles.article}>
          <div
            className={Styles.post}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div
            className={Styles.nav}
            dangerouslySetInnerHTML={{ __html: nav }}
          />
        </article>
      </>
    );
  }
}

// export default function Post({ postData }) {
//   useTitle(postData.title);
//   const [selectA, setselectA] = useState({});
//   const [ulDom, setUlDom] = useState({});
//   const isFirstRender = useRef(true);

//   const contentArr = postData.contentHtml.split("</nav>");
//   const nav = contentArr[0] + "</nav>";
//   const content = contentArr[1];

//   const clickEvent = (e) => {
//     const target = e.target;
//     console.log("target: ", target);

//     // if (target.tagName === "A") {
//     //   console.log("tagName: ", target.tagName);
//     //   setselectA(target);
//     // }
//   };

//   useEffect(() => {
//     const ulDomtemp = document.querySelector(".list-class");
//     setUlDom(ulDomtemp);
//     ulDomtemp.addEventListener("click", (e) => clickEvent(e));

//     return () => {
//       ulDomtemp.removeEventListener('click', clickEvent)
//     };
//   }, [ulDom]);

//   // useEffect(() => {
//   //   if (isFirstRender.current) {
//   //     return isFirstRender.current = false
//   //   }
//   //   selectA.classList.add("active");
//   // }, [selectA]);

//   return (
//     <>
//       <article className={Styles.article}>
//         <div
//           className={Styles.post}
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//         <div className={Styles.nav} dangerouslySetInnerHTML={{ __html: nav }} />
//       </article>
//     </>
//   );
// }
