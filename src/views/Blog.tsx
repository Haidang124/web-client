import React from 'react';
import dataBlogs from '../assets/data/dataBlog.json';
const Blog: React.FC<any> = (props: any) => {
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-7">
        <div
          className="row d-flex justify-content-center"
          style={{ width: '99.99%' }}>
          <div
            className="col-11 w-100 h-100"
            style={{ backgroundColor: 'rgb(38,137,12)' }}>
            <div className="row d-flex justify-content-center pt-3">
              <div className="col-8 text-white">
                <a href="/admin/index" className="text-white">
                  <u> Back to blog</u>
                </a>
                <div
                  className="mt-3"
                  style={{ fontSize: '40px', fontWeight: 'bold' }}
                  id="title">
                  {props.match.params.title}
                </div>
                <div
                  className="mt-3"
                  id="describe"
                  style={{ fontSize: '20px' }}>
                  {dataBlogs[Number(props.match.params.id)].describe}
                </div>
                <a href="/" style={{ color: 'white' }}>
                  <div
                    id="author"
                    className="row w-100 d-flex flex-row bd-highlight mt-3">
                    <div id="icon_image" className="p-2 bd-highlight">
                      <img
                        src="https://kahoot.com/files/2017/05/craig_kahoot_avatar.png"
                        style={{
                          width: '60px',
                          height: '60px',
                          border: '3px solid white',
                          borderRadius: '50%',
                        }}
                        alt=""
                      />
                    </div>
                    <div id="username" className="p-2 bd-highlight">
                      <span style={{ fontWeight: 'bold' }}>
                        <u>Craig Narveson</u>
                      </span>
                      <br />
                      <span>October 29, 2020</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-8 mt-5"
            id="content"
            style={{ fontSize: '18px', lineHeight: '40px', color: 'black' }}>
            <div
              dangerouslySetInnerHTML={{
                __html: dataBlogs[Number(props.match.params.id)].content,
              }}
            />
            <br />
            <br />
            <br />
          </div>
          <div
            className="col-11 w-100 h-100 pt-4"
            style={{ backgroundColor: 'rgb(38,137,12)' }}>
            <div className="row d-flex justify-content-center pt-3">
              <div className="col-8 text-white">
                <div className="d-flex justify-content-around">
                  <button type="button" className="btn btn-white">
                    Kahoot! Academy
                  </button>
                  <button type="button" className="btn btn-white">
                    disney
                  </button>
                  <button type="button" className="btn btn-white">
                    Pixar
                  </button>
                  <button type="button" className="btn btn-white">
                    Halloween
                  </button>
                  <button type="button" className="btn btn-white">
                    Día de los muertos
                  </button>
                </div>
                <a href="/" style={{ color: 'white' }}>
                  <div
                    id="author"
                    className="row w-100 d-flex flex-row bd-highlight mt-3">
                    <div id="icon_image" className="p-2 bd-highlight">
                      <img
                        src="https://kahoot.com/files/2017/05/craig_kahoot_avatar.png"
                        style={{
                          width: '60px',
                          height: '60px',
                          border: '3px solid white',
                          borderRadius: '50%',
                        }}
                        alt=""
                      />
                    </div>
                    <div id="username" className="p-2 bd-highlight">
                      <span style={{ fontWeight: 'bold' }}>
                        <u>Craig Narveson</u>
                      </span>
                      <br />
                      <span>October 29, 2020</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
