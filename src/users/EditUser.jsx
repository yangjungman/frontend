import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
  let navigate = useNavigate(); //네비게이트 객체 생성

  //"/user/:id" 의 값이 "/user/123" 이면 id의 값으로 123을 받음

  const { id } = useParams();

  const [user, SetUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    SetUser(result.data);
  };

  const onInputChange = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //구조 분해 할당
  const { name, username, email } = user;

  //폼에 가입버튼을 눌렀을 때
  const onSubmit = async (e) => {
    e.preventDefault(); //기본 전송기능 중지
    //백앤드서버로 user 데이터 전송
    await axios.put(`http://localhost:8080/user/${id}`, user);
    //바로 홈페이지로 이동(리스트에 새유져가 보임)
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">수정 하기</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                이름
              </label>
              <input
                required
                type="text"
                id="name"
                value={name}
                onChange={onInputChange}
                className="form-control"
                placeholder="이름 입력"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                유저네임
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={onInputChange}
                className="form-control"
                placeholder="유저네임 입력"
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                이메일
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={onInputChange}
                className="form-control"
                placeholder="이메일 입력"
                name="email"
              />
            </div>
            <div className="mb-3 text-center">
              <button
                type="submit"
                className="btn btn-outline-primary px-3 mx-2"
              >
                수정
              </button>
              <Link to="/" className="btn btn-outline-danger px-3 mx-2">
                취소
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
