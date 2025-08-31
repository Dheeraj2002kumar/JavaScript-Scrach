#include<stdio.h>

int main(){
    int day = 3;

switch (day) {
    case 1:
        printf("Monday");
        
    case 2:
        printf("Tuesday");
        
    case 3:
        printf("Wednesday");
        
    default:
        printf("Another day");
}

    return 0;
}