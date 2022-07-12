//Tipos de Triângulos

#include <bits/stdc++.h>
using namespace std;

int main(){
    double a, b ,c;
    scanf("%lf %lf %lf", &a, &b, &c);

    vector<double> v;
    v.push_back(a);
    v.push_back(b);
    v.push_back(c);
    sort(v.begin(), v.end());

    if(v[0] >= v[1] + v[2])
        cout << "NAO FORMA TRIANGULO";
    
}
 