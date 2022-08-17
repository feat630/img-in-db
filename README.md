# img-in-db
db에 사진 저장하기

# 작성이유
si에서 가끔 만나는 이미지 자체를 db에 저장하는 스펙을 고객이 요구

스스로 공부했던내용을 정리

혹시 후에 이런 요구를 받게되는 다른개발자들의 레퍼런스를 위하여

# 스펙
Maria DB + node express + react + toast ui

# 설명
toast ui editor을 이용한 db자체에 이미지의 base64코드를 저장하는 방식
useRef와 onChange를 이용해 에디터의 글내용을 

# 사용시 주의점
내용 저장시 html태그가 같이 저장되는 형태

innerHTML을 react에서 사용하기위해서는

dangerouslySetInnerHTML를 사용해야하지만 보안에 취약점이 생겨 권장하지 않는방법
