//자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요. 
//예를들어 n이 12345이면 "5+4+3+2+1=15" 라는 문자열을 리턴합니다.

function solution(n) {
    const reversed = [...n.toString()].reverse();         //변수 reversed에 입력받은 자연수 n을 [...n.toString()]로 스프레드 연산자와 toString연산자로 문자열이 든 배열로 펼쳐준다. reserse로 배열을 역순으로 뒤집음.      
    const sum = reversed.reduce((acc, cur) => acc +(+cur), 0); //변수 result에 변수 reversed에 담긴 배열을 reduce 콜백함수로 누적덧셈함 값을 반환한다.(역순된 배열을 각 요소를 누적하여 더해서 결과값 하나만 반환.)
    const result = reversed.join("+") + "=" + sum.toString(); //변수 result에 역순된 문자열 배열이 담긴 reversed를 '+'기호로 join하고, sum에 담긴 숫자를 문자열로 전환해서 기호로 묶어 준 후 return한다. 
    return result;
}

console.log(solution(718253));

function solution(n) {
    const reversed = [...n.toString()].reverse();       
    const sum = reversed.reduce((acc, cur) => acc +(+cur), 0); 
    const result = reversed.join("+") + "=" + sum.toString(); 
    return result;
}

console.log(solution(718253));
