# frontend-tech-todos-lab

이 프로젝트는 다양한 프론트엔드 기술 스택을 연습하고 익히기 위한 todos monorepo입니다. 목표는 간단한 할 일 목록을 관리하는 애플리케이션을 다양한 방식으로 구현하고 실험하는 것입니다. 이 monorepo에는 여러 개의 패키지가 포함되어 있으며, 각 패키지는 다른 기술 스택 또는 개발 방법론을 사용하여 구현된 todos 애플리케이션입니다.

## Map

```bash
├── README.md
├── package.json
├── packages
│   ├── client-global-state # todos client app for React Query + Recoil (3000 PORT)
│   ├── client-tdd # todos client app for TDD (3001 PORT)
│   └── server # todos json server (8080 PORT)
└── yarn.lock
```

패키지들은 다음과 같은 구조로 구성되어 있습니다:

- `server`: JSON 서버를 활용하여 todos 데이터를 제공하는 서버 애플리케이션입니다. 

- [Created in January 2023] `client-global-state`: React Query와 Recoil을 활용하여 전역 상태 관리를 구현한 todos 클라이언트 애플리케이션입니다. 이 패키지는 React의 상태 관리를 연습하고 최신 상태 관리 라이브러리를 적용하는 것을 목표로 합니다. 

- [WIP] `client-tdd`: Test-Driven Development(TDD) 방식으로 todos 클라이언트 애플리케이션을 구현한 패키지입니다. 테스트 주도 개발을 통해 코드의 품질과 안정성을 유지하면서 프론트엔드 개발 방법론을 익히는 것을 목표로 합니다. 

