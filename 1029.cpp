//Fibonacci, Quantas Chamadas?

#include <bits/stdc++.h>
using namespace std;
 
unsigned fib(unsigned n, unsigned* num_calls);

int main() {
    unsigned n = 0;
    cin >> n;
    unsigned f, num_calls;

    for (unsigned i = 0, j; i < n; i++){
        num_calls = 0;
        cin >> j;

        f = fib(j, &num_calls);
        printf("fib(%u) = %u calls = %u\n", j, num_calls, f);
    }

    return 0;
}

unsigned fib(unsigned n, unsigned* num_calls){
    if(n == 0 || n == 1)
        return n;
    else{
        *num_calls = *num_calls + 2;
        return(fib(n-1, num_calls) + fib(n-2, num_calls));
    }
}