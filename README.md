# React-Native FlatList Infinity Scroll 

## 요즘 웹이나 앱의 홈 부분 뉴스피드 형식에 자주 사용되는 무한 스크롤 기능. 플랫리스트를 이용하여 구현해 보았다
### 데이터 State와 Props를 클래스형식이 아닌 함수형으로 코드 작성.

### <FlatList>는 많은 기능이 있다.ScrollView와 같이 데이터가 화면에 벗어났을 때도 Scroll을 생성하지만, 한 번에 모든 데이터를 렌더링하지 않고 화면에 보여지는 부분(혹은 설정한 수만큼의 데이터)만 렌더링한다는 차이가 있다.

> React-Native공식 문서를 참조하여 기본 FlatList 코드 작성 후 


> 원하는 무한 스크롤 기능 구현을 위해  
> const onEndReached = () => { 함수 작성. 이프문을 돌려 로딩중엔 리턴, else getData함수 호출하여 끊임 없이 스크롤 가능하게 함.


## 스크롤 맨 밑으로 갔으나 더 이상 화면이 보이지 않음.
![Screenshot_1631523311](https://user-images.githubusercontent.com/78295968/133054700-375af270-2024-41a6-be4e-137da2c28223.png)



## onEndReached함수를 통해 계속 getData함수 호출 ->무한 스크롤
![Screenshot_1631523320](https://user-images.githubusercontent.com/78295968/133055709-4b276f7c-1bc1-4e0b-a3f6-c3e14737751a.png)

  
