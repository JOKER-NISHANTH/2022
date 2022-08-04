#include<iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> v;
    int n = 10;
    cout << "Before Deletion in vector " << endl;
    for(int i = 0 ; i < n ; i++){
        v.push_back(i);
    }
    for(int i = 0 ; i < n ; i++){
        cout<< v[i]<< " ";
    }
    cout <<endl;

    // delete
    cout << "After Deletion in vector " << endl;
    v.erase(v.begin()+7);

    for(int i = 0 ; i < v.size() ; i++){
        cout<< v[i]<< " ";
    }
    return 0;
}