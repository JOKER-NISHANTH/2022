#include<iostream>
#include<bits/stdc++.h>
using namespace std;

struct Node{
    int data;
    Node* next;
    Node(int x){
        data=x;
        next=NULL;
    }
};

int main(){

    // First linked List
    Node* head = new Node(10);
    // Node* temp1 = new Node(20);
    // Node* temp2 = new Node(30);

    head->next=new Node(30);
    head->next->next=new Node(20);
    // cout <<head->data<<"-->"<<temp1->data<<"-->"<<temp2->data<<"-->"<<" NULL";
    cout <<head->data<<"-->"<<head->next->data<<"-->"<<head->next->next->data<<"-->"<<" NULL";


    return 0;
}