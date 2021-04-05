#include <stdio.h>

int main() {
  char inbuf[1000];

  for(int i=0; i<100; i++) {
    inbuf[0] = 0;
    char* r = gets(inbuf); 
    puts(inbuf);
    
    if(!r) break;
  }

  return 0;
}