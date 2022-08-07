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

void printList(Node* head){
    Node* curr = head;
    while(curr!=NULL){
        cout <<curr->data<<" " ;
        curr = curr -> next;

    }
}

Node* insertBegin(Node* head,int x){
    Node* temp = new Node(x);
    temp->next = head;
    return temp;
}

Node* insertEnd(Node* head,int x){
    if(head==NULL){
        return new Node(x);
    }
    Node* curr = head;
    while(curr->next!=NULL){
        curr=curr->next;
    }
    curr->next=new Node(x);
    return head;
}

int main(){

    Node* head = new Node(10);
    head->next=new Node(20);
    head->next->next=new Node(30);
    head->next->next->next=new Node(40);
    head = insertBegin(head,0);
    head = insertEnd(head,50);
    printList(head);

    return 0;
}