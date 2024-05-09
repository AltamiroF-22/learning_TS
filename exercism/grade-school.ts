export class GradeSchool {
  private gradeMap: { [grade: number]: string[] } = {};

  roster() {
    const sortedGradeMap: { [grade: number]: string[] } = {};
    for (const grade in this.gradeMap) {
      sortedGradeMap[grade] = [...this.gradeMap[grade]].sort(); // Cria uma cópia dos arrays para garantir imutabilidade
    }

    // Torna o objeto imutável
    return Object.freeze(sortedGradeMap);
  }

  add(name: string, grade: number): void {
    // Verificar se o aluno já está em outra grade
    const existingGrade = Object.keys(this.gradeMap).find((g) =>
      this.gradeMap[parseInt(g)].includes(name)
    );
    
    if (existingGrade) {
      // Remover o aluno da grade existente
      const index = this.gradeMap[parseInt(existingGrade)].indexOf(name);
      this.gradeMap[parseInt(existingGrade)].splice(index, 1);
    }

    // Adicionar o aluno à nova grade
    if (!this.gradeMap[grade]) {
      this.gradeMap[grade] = [];
    }
    this.gradeMap[grade].push(name);
  }

  grade(grade: number) {
    if (!this.gradeMap[grade]) return [];
    return Object.freeze([...this.gradeMap[grade].sort()]);
  }
}
